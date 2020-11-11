import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            ></FlatList>
            <View style={styles.description}>
                <Text style={styles.titleStyle}>{result.name}</Text>
                <Text>{result.alias}</Text>
                <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text>Phone: {result.display_phone}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 400
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginLeft: 15,
    }
});

export default ResultsShowScreen;