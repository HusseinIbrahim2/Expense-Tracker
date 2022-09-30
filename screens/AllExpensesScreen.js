import { View, Text } from "react-native";

import SubTitle from "../components/Details/Subtitle";

function AllExpensesScreen() {
    return (
        <View>
            <SubTitle
                text='Total'
                number='4500'
            />
        </View>
    )
}

export default AllExpensesScreen;