import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

import SubTitle from "../components/Details/Subtitle";
import IconButton from "../components/Details/IconButton";

function RecentExpensesScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<IconButton
                    name='add'
                    size={25}
                    color='black'
                    onPress={() => navigation.navigate('AddExpenses')} />
                );
            },
        }
        );
    }, [navigation]);

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