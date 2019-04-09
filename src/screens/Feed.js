import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../component/Header'
import Post from '../component/Post'

export default class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafael@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'john Ray Sheldon',
                        comments: 'Stunning'
                    },
                    {
                        nickname: 'Maria Silva',
                        comments: 'Muito bom !'
                    }
                ]
            },

            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafael@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'john Ray Sheldon',
                        comments: 'Stunning'
                    },
                    {
                        nickname: 'Maria Silva',
                        comments: 'Muito bom !'
                    }
                ]
            }

        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})
