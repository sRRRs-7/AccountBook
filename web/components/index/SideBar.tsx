import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { getMonthState, isMonthState, sideBarState } from '../../atoms/atom'
import { fetchGetMonth } from '../../pages/api/axios'

const SideBar = () => {
  const [isMenu, setIsMenu] = useRecoilState<boolean>(sideBarState)
  const [monthData, setMonthData] = useRecoilState(getMonthState)
  const [isMonth, setIsMonth] = useRecoilState<boolean>(isMonthState)
  const [month, setMonth] = useState<number>(0)

  async function JanuaryHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function FebruaryHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function MarchHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function AprilHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function MayHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function JuneHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function JulyHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function AugustHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function SeptemberHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function OctoberHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function NovemberHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  async function DecemberHandler() {
    setIsMenu(!isMenu)
    const { data }: any = await fetchGetMonth(month)
    setMonthData(data)
    setIsMonth(!isMonth)
  }

  return (
    <div className={`fixed top-0 left-0 w-[25%] h-full z-20 ${isMenu ? "translate-y-0" : "-translate-y-full"} ease-in-out duration-300 bg-white`}>

      <div className='ml-5 p-7 space-y-5'>
        <div className="mt-14 text-xl hover:scale-105 font-mono text-red-400 ">
          <button
            onFocus={() => setMonth(1)}
            onClick={JanuaryHandler}
          >
            January
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400 ">
          <button
            onFocus={() => setMonth(2)}
            onClick={FebruaryHandler}
          >
            February
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(3)}
            onClick={MarchHandler}
          >
            March
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(4)}
            onClick={AprilHandler}
          >
            April
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(5)}
            onClick={MayHandler}
          >
            May
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(6)}
            onClick={JuneHandler}
          >
            June
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(7)}
            onClick={JulyHandler}
          >
            July
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(8)}
            onClick={AugustHandler}
            >
              August
            </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(9)}
            onClick={SeptemberHandler}
            >
              September
            </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(10)}
            onClick={OctoberHandler}
          >
            October
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(11)}
            onClick={NovemberHandler}
          >
            November
          </button>
        </div>

        <div className="text-xl hover:scale-105 font-mono text-red-400">
          <button
            onFocus={() => setMonth(12)}
            onClick={DecemberHandler}
            >
              December
            </button>
        </div>

      </div>

    </div>
  )
}

export default SideBar