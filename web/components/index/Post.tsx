import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { changeValue, getAllState, postState } from '../../atoms/atom'
import { fetchAllGet, fetchPost, postData } from '../../pages/api/axios'

const Post = () => {
    const [post, setPost] = useRecoilState<postData>(postState)
    const [getAll, setGetAll] = useRecoilState(getAllState)
    const [change, setChange] = useRecoilState(changeValue)
    const [postValue, setPostValue] = useState<postData>({
        Payer: "",
        Food: "",
        Method: "Cash",
        Expense: 100,
    })

    function payerChange(e: any) {
        setPostValue({
            Payer: e.target.value,
            Food: postValue.Food,
            Method: postValue.Method,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function foodChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Food: e.target.value,
            Method: postValue.Method,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function methodChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Food: postValue.Food,
            Method: e.target.value,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function expenseChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Food: postValue.Food,
            Method: postValue.Method,
            Expense: e.target.value,
        })
        setPost(postValue)
    }

    async function onClickHandler(e: any) {
        e.preventDefault()
        const { data }  = await fetchPost(postValue)
        setPost(postValue)
        console.log(data)

        setPostValue({
            Payer: "",
            Food: "",
            Method: "Cash",
            Expense: 100,
        })

        setChange(!change)
    }

    return (
        <div className='m-7 p-5 bg-orange-300 max-w-full w-[40%] md:w-[25%] lg:w-[25%] max-h-full h-[50%] space-y-2 rounded-2xl'>
            <div className='mx-7 text-lg'>
                <h1>What have you ate today?</h1>
            </div>

            <p>Payer</p>
            <input
                type="text"
                value={postValue.Payer}
                onChange={payerChange}
                className="ml-5 p-3 w-[150px] h-[30px] rounded-lg"
            />

            <p>Food</p>
            <input
                type="text"
                value={postValue.Food}
                onChange={foodChange}
                className="ml-5 p-3 w-[150px] h-[30px] rounded-lg"
            />

            <p>Method</p>
            <select
                name="method"
                onChange={methodChange}
                className="ml-5 py-1 px-2 w-[150px] h-[30px] rounded-lg"
            >
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
            </select>

            <p>Expense</p>
            <input
                type="number"
                value={postValue.Expense}
                onChange={expenseChange}
                className="ml-5 p-3 w-[150px] h-[30px] rounded-lg"
            />

            <div>
            <button
                onClick={onClickHandler}
                className='flex mx-20 text-lg bg-blue-100 px-3 py-1 mt-4 hover:scale-105 rounded-md lg:mx-44'
            >
                register
            </button>
            </div>

        </div>
    )
}

export default Post