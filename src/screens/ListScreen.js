import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '12' },
        { name: 'Friend #2', age: '13' },
        { name: 'Friend #3', age: '14' },
        { name: 'Friend #4', age: '53' },
        { name: 'Friend #5', age: '55' },
        { name: 'Friend #6', age: '45' },
        { name: 'Friend #7', age: '9' },
        { name: 'Friend #8', age: '2' },
        { name: 'Friend #9', age: '1' }
    ];

    return (
    <FlatList 
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({ item }) => {
    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} 
        />
    
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;