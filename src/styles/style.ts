/** @format */

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
    input: {
        padding: 5,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    parkingArea: {
        padding: "10%",
    },
    item: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 20,
        marginRight: '20px'
    },
    itemText: {
        color: "white",
    },
    modal: {
        top: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        alignItems: "center",
    },
    snack: {
        bottom: 5,
        backgroundColor: "red",
        padding: 10,
    },
    snackText: {
        color: "white",
    },
    lots: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
