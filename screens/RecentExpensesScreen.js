import { View, Text } from "react-native";

import SubTitle from "../components/Details/Subtitle";

function RecentExpensesScreen() {
    return (
        <View>
            <SubTitle
                text='Last 7 days'
                number='48.2'
            />
        </View>
    )
}

export default RecentExpensesScreen;