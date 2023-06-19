import { fetchAllBookReviews } from "../api/bookReview"
import { BookReviewInfo } from "@/types/types"
import React, { useEffect, useState } from "react"

export const BookReview: React.FC = ()=> {
  const [offsetNum, setOffsetNum] = useState<number>(10)
  const [bookReviews, setBookReviews] = useState<BookReviewInfo[]>([])
  useEffect(()=>{
    getBookReviews(offsetNum)
  }, [])

  const getBookReviews = async(offsetNum: number)=> {
      const fetchedBookReviews = await fetchAllBookReviews(offsetNum);
      setBookReviews(fetchedBookReviews)
  }
  return (
    <>
      <div className="text-center font-bold text-xl my-10">読書レビュー</div>
      {bookReviews && bookReviews.map((bookReview: BookReviewInfo) => {
        return (
          <div id={bookReview.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-2 mx-auto">
            <div>概要: {bookReview.detail}</div>
            <div>レビュー: {bookReview.review}</div>
            <div>👦: {bookReview.reviewer}</div>
          </div>
          )
        }
      )}
    </>
  )
}