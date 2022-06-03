import { useEffect, useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { fetchAllGet } from "../../pages/api/axios";
import { changeValue, getAllState, getState } from "../../atoms/atom";
import { useRecoilState } from "recoil";


export default function Graph() {
  const [recoilData, setRecoilData] = useRecoilState(getAllState)
  const [change, setChange] = useRecoilState(changeValue)
  const [stateData, setStateData] = useState([])
  const [active, setActive] = useState(null);
  const [totalExpense, setTotalExpense] = useState(0)
  const width = 400;
  const height = 400
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

  async function sum(data) {
    setRecoilData(data)
    const total = data.reduce((prev, data) => prev + data.expense, 0)
    setTotalExpense(total)
  }

  useEffect(() => {
    const f1 = async() => {
      if (!change) {
        const { data } = await fetchAllGet()
        setStateData(data)
        await sum(data)
        setChange(!change)
      }

    };
    f1();
  },[setRecoilData, change])

  return (
    <main className="p-10 m-10 bg-orange-500 rounded-3xl">
      <svg width={width} height={height}>
        <Group top={half} left={half}>
          <Pie
            data={accounts}
            pieValue={(data) => data.balance}
            outerRadius={140}
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
                fill={active.color}
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
