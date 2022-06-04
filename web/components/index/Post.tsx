import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { changeValueState, getAllState, postState } from '../../atoms/atom'
import { fetchAllGet, fetchPost, postData } from '../../pages/api/axios'

const Post = () => {
    const [post, setPost] = useRecoilState<postData>(postState)
    const [getAll, setGetAll] = useRecoilState(getAllState)
    const [change, setChange] = useRecoilState(changeValueState)
    const [postValue, setPostValue] = useState<postData>({
        Payer: "",
        Month: 1,
        Food: "",
        Method: "Cash",
        Expense: 100,
    })

    function payerChange(e: any) {
        setPostValue({
            Payer: e.target.value,
            Month: postValue.Month,
            Food: postValue.Food,
            Method: postValue.Method,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function foodChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Month: postValue.Month,
            Food: e.target.value,
            Method: postValue.Method,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function monthChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Month: e.target.value,
            Food: postValue.Food,
            Method: postValue.Method,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function methodChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Month: postValue.Month,
            Food: postValue.Food,
            Method: e.target.value,
            Expense: postValue.Expense,
        })
        setPost(postValue)
    }

    function expenseChange(e: any) {
        setPostValue({
            Payer: postValue.Payer,
            Month: postValue.Month,
            Food: postValue.Food,
            Method: postValue.Method,
            Expense: e.target.value,
        })
        setPost(postValue)
    }

    async function onClickHandler(e: any) {
        e.preventDefault()
        const { data }: any  = await fetchPost(postValue)
        setPost(postValue)
        console.log(data)

        setPostValue({
            Payer: "",
            Month: 1,
            Food: "",
            Method: "Cash",
            Expense: 100,
        })

        setChange(!change)
    }

    return (
        <div className='ml-10 mt-28 p-5 bg-gradient-to-r from-pink-500 to-orange-500 max-w-full w-[40%] md:w-[25%] lg:w-[25%] max-h-full h-[50%] space-y-2 rounded-2xl'>
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

            <p>Month</p>
            <select
                name="method"
                onChange={monthChange}
                className="ml-5 py-1 px-2 w-[150px] h-[30px] rounded-lg"
            >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

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