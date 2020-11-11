import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputSyle}
                placeholder="Search..."
                value={term}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },

    iconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: "center",
        marginHorizontal: 15
    },

    inputSyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;