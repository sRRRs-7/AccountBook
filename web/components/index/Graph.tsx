import { useEffect, useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { fetchAllGet } from "../../pages/api/axios";
import { changeValueState, getAllState, getMonthState, getState, isMonthState } from "../../atoms/atom";
import { useRecoilState } from "recoil";


export default function Graph() {
  const [recoilData, setRecoilData] = useRecoilState(getAllState)
  const [postChange, setPostChange] = useRecoilState(changeValueState)
  const [isMonth, setIsMonth] = useRecoilState<boolean>(isMonthState)
  const [monthData, setMonthData] = useRecoilState(getMonthState)

  const [initial, setInitial] = useState<boolean>(true)
  const [stateData, setStateData] = useState([])
  const [active, setActive] = useState(null)
  const [totalExpense, setTotalExpense] = useState<number>(0)
  const width = 500;
  const height = 500
  const half = width / 2;
  const accounts = [
    {
      balance: totalExpense,
      color: "#ff0000",
      class: "expense"
    }as const,
    {
      balance: 20000 - totalExpense,
      color: "#0000ff",
      class: "stock"
    }as const,
  ];

  async function sum(data: any) {
    setRecoilData(data)
    const total = data.reduce((prev: any, data: any) => prev + data.expense, 0)
    setTotalExpense(total)
    console.log(total)
  }

  useEffect(() => {
    const f1 = async() => {
      if (!postChange && !isMonth && initial){
        const { data }: any = await fetchAllGet()
        setStateData(data)
        await sum(data)
        setInitial(!initial)
      }

      if (postChange) {
        const { data }: any = await fetchAllGet()
        setStateData(data)
        await sum(data)
        setPostChange(!postChange)
      }

      if (isMonth) {
        setStateData(monthData)
        await sum(monthData)
        setIsMonth(!isMonth)
      }

    };
    f1();
  },[isMonth, setRecoilData, postChange])

  return (
    <main className="p-10 m-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl">
      <svg width={width} height={height}>
        <Group top={half} left={half}>
          <Pie
            data={accounts}
            pieValue={(data) => data.balance}
            outerRadius={170}
            innerRadius={({ data }) => {
              const size = active && active.class == data.class ? 3 : 9;
              return half - size;
            }}
            padAngle={0.03}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.class}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text
                textAnchor="middle"
                fill={"#fff"}
                fontSize={30}
                dy={50}
              >
                {active.class === "expense" ? "Expense" : "Stock"}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={40}
                dy={10}
              >
                {`${active.balance}`}
              </Text>
            </>

          ) : (

            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-25}>
                {totalExpense}
              </Text>

              <Text textAnchor="middle" fill="#0f0" fontSize={30} dy={20}>
                {`Balance: ${20000 - totalExpense}`}
              </Text>

              <Text textAnchor="middle" fill="#0ff" fontSize={20} dy={60}>
                {`${(totalExpense / 20000 * 100).toFixed(2)}%`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
}
