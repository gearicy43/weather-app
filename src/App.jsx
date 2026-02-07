import { createSignal, onMount } from 'solid-js'
import { pinyin } from 'pinyin-pro'

function App() {
  const [city, setCity] = createSignal('')
  const [weather, setWeather] = createSignal(null)
  const [loading, setLoading] = createSignal(false)
  const [error, setError] = createSignal('')

  const searchWeather = async () => {
    if (!city()) return
    
    setLoading(true)
    setError('')
    
    try {
      const apiKey = 'b4936997682ad8c457856f2343b76a0f'
      
      // 检查是否包含中文字符
      const hasChinese = /[\u4e00-\u9fa5]/.test(city())
      let searchCity = city()
      
      // 如果是中文，转换为拼音
      if (hasChinese) {
        // 获取城市名拼音，首字母大写，去掉空格
        const cityPinyin = pinyin(city(), {
          toneType: 'none',
          type: 'array'
        }).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('')
        searchCity = cityPinyin
      }
      
      // 先尝试直接查询
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric&lang=zh_cn`
      )
      
      // 如果拼音查询失败，再尝试原输入
      if (!response.ok && hasChinese) {
        response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city()}&appid=${apiKey}&units=metric&lang=zh_cn`
        )
      }
      
      if (!response.ok) {
        throw new Error(`未找到城市 "${city()}" 的天气信息，请检查城市名或尝试使用英文名`)
      }
      
      const data = await response.json()
      data.displayName = city()
      setWeather(data)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div class="app">
      <h1>SolidJS 天气应用</h1>
      
      <div class="search">
        <input
          type="text"
          placeholder="输入城市名称"
          value={city()}
          onInput={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && searchWeather()}
        />
        <button 
          onClick={searchWeather}
          disabled={loading() || !city()}
        >
          {loading() ? '查询中...' : '查询天气'}
        </button>
      </div>

      {error() && (
        <div class="error">{error()}</div>
      )}

      {weather() && (
        <div class="weather-card">
          <h2>{weather().displayName || weather().name}, {weather().sys.country}</h2>
          <div class="temperature">
            {Math.round(weather().main.temp)}°C
          </div>
          <div class="description">
            {weather().weather[0].description}
          </div>
          <div class="details">
            <div>湿度: {weather().main.humidity}%</div>
            <div>风速: {weather().wind.speed} m/s</div>
            <div>体感温度: {Math.round(weather().main.feels_like)}°C</div>
          </div>
        </div>
      )}

      <div class="note">
        <p>✅ 已连接真实天气API + 中文拼音转换</p>
        <p>📍 现在支持任意中文城市名：上海、南阳、洛阳、郑州等</p>
        <p>🌍 同时支持英文名：London、Tokyo、New York</p>
      </div>
    </div>
  )
}

export default App