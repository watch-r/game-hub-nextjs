"use client";
import { ratings } from "@/app/lib/TypeDefinations";
import { Text } from "@radix-ui/themes";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";

type Props = {
    ratings: ratings[];
};

const PieChartEx = ({ ratings }: Props) => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    if (ratings.length == 0)
        return (
            <div className="justify-center">
                <Text align={'center'}>No Raings Found</Text>
            </div>
        );
    return (
        <ResponsiveContainer width={"100%"} height={400}>
            <PieChart>
                <Pie
                    data={ratings}
                    innerRadius={"40%"}
                    outerRadius={"60%"}
                    paddingAngle={5}
                    dataKey="percent"
                    label
                >
                    {ratings.map((rating, index) => (
                        <Cell
                            key={rating.id}
                            fill={COLORS[index % COLORS.length]}
                            name={rating.title}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartEx;
