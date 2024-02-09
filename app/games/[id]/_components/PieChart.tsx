"use client";
import { ratings } from "@/app/lib/TypeDefinations";
import ratingStatic from "@/app/lib/ratingsStatic";
import { Text } from "@radix-ui/themes";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type Props = {
    ratings: ratings[];
};

const PieChartEx = ({ ratings }: Props) => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <ResponsiveContainer width={"100%"} height={400}>
            <PieChart>
                <Pie
                    data={ratings.length !== 0 ? ratings : ratingStatic}
                    innerRadius={"40%"}
                    outerRadius={"60%"}
                    paddingAngle={5}
                    dataKey="percent"
                    label={ratings.length !== 0}
                >
                    {ratings.length !== 0
                        ? ratings.map((rating, index) => (
                              <Cell
                                  key={rating.id}
                                  fill={COLORS[index % COLORS.length]}
                                  name={rating.title + ": " + rating.count}
                              />
                          ))
                        : ratingStatic.map((rating, index) => (
                              <Cell
                                  key={rating.id}
                                  fill={COLORS[index % COLORS.length]}
                                  name={rating.title + ": " + rating.count}
                              />
                          ))}
                </Pie>
                {ratings.length !== 0 && <Tooltip />}
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartEx;
