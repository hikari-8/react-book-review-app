import { BookReviewInfo } from "@/types/types"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;

/**
 * book reviews を取得する
 * @param offsetNum 10以上
 */
export const fetchAllBookReviews = async (offsetNum: number)=> {
  try {
    const res = await axios.get<BookReviewInfo[]>(`${API_URL}/public/books?=${offsetNum}`)
    return res.data
  } catch(err) {
    throw err
  }
}