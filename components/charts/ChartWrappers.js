import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { cn } from '../../lib/utils';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(15, 23, 42, ${opacity})`, // slate-900
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
};

const LineChartWrapper = ({ data, title, className }) => {
    return (
        <View className={cn("bg-white p-4 rounded-lg shadow-sm", className)}>
            {title && <Text className="text-lg font-semibold mb-4">{title}</Text>}
            <LineChart
                data={data}
                width={screenWidth - 48} // Adjust for padding
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

const BarChartWrapper = ({ data, title, className }) => {
    return (
        <View className={cn("bg-white p-4 rounded-lg shadow-sm", className)}>
            {title && <Text className="text-lg font-semibold mb-4">{title}</Text>}
            <BarChart
                data={data}
                width={screenWidth - 48}
                height={220}
                yAxisLabel=""
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

const PieChartWrapper = ({ data, title, className }) => {
    return (
        <View className={cn("bg-white p-4 rounded-lg shadow-sm", className)}>
            {title && <Text className="text-lg font-semibold mb-4">{title}</Text>}
            <PieChart
                data={data}
                width={screenWidth - 48}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 10]}
                absolute
            />
        </View>
    );
};

export { LineChartWrapper, BarChartWrapper, PieChartWrapper };
