import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import style from './styles.module.scss'
import {getNews} from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'

const Main = () => {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    const fetchNews = async () => {
      try{
        const response = await getNews()
        setNews(response.news)
      } catch(err) {
        console.log(err);
      }
    }
    fetchNews()
  }, [])
  return (
    <main className={style.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news}/>
    </main>
  )
}

export default Main
