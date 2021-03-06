/** @format */

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightskyblue",
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        flex: 1,
        backgroundColor: "lightgreen",
        padding: 10,
    },
    input: {
        padding: 5,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    parkingArea: {
        padding: "10%",
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 20,
        marginRight: '20px',
        width: "100%",
        // height: "50px",
        margin: "10px",
        backgroundColor: 'blue'
    },
    item1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 20,
        marginRight: '20px',
        width: "100%",
        // height: "50px",
        margin: "10px",
        backgroundColor: 'red'

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
        top: '80%'
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
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }
    ,
    layout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
});
