// IMPORTS AREA
import React, {useEffect, useRef, useState} from 'react';

import { 
    PageArea,
    AudioTitle,
    ImageContainer,
    MinutesContainer,
    MinuteStart,
    MinuteEnd,
    AudioControlsContainer
} from '../styles/player_styles';

import Slider from '@react-native-community/slider';

import {
    StatusBar, 
    TouchableOpacity,
    View,
    Image,
    Text,
    FlatList,
    Dimensions,
    Animated
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import nature from '../../modal/data';

// END OF THE IMPORTS

// CONST'S AND VARIABLES AREA

const { width, height }  = Dimensions.get('window');

function player({navigation}) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [audioIndex, setAudioIndex] = useState(0);
    const audioSlider = useRef(null);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
        // console.log('scroll x', scrollX)
        const index = Math.round( value / width );
        setAudioIndex(index);
        });

        return () => {
            scrollX.removeAllListeners();
        }
    }, []);

    const skipToNext = () => {
        audioSlider.current.scrollToOffset({
            offset: (audioIndex + 1) * width, 
        });
    }

    const skipToPrevious = () => {
        audioSlider.current.scrollToOffset({
            offset: (audioIndex - 1) * width, 
        });
    }
    
    const renderSongs = ({ index, item }) => {
        return (
            <Animated.View style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ImageContainer>
                    <Image 
                        source={item.image}
                        style={{
                            width: 350,
                            height: 350,
                            borderRadius: 10,
                        }}
                    />
            </ImageContainer>
        </Animated.View>
        )
    }

// END OF THE CONST'S AND VARIABLES AREA

// SCREEN COMPONENTS AREA

    return (
        <PageArea>

            <StatusBar 
                backgroundColor="#0C2C58"
            />
            
            <View style={{
                marginBottom: -55, 
                marginTop: 15, 
                width: 360,
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Nature Sound');
                }}>
                    <Ionicons name="arrow-back-outline" 
                    size={32} 
                    color="#EEE"
                    />
                </TouchableOpacity>

                <Text style={{
                    color: '#EEE',
                    marginBottom: 20,
                    fontSize: 18,
                    marginLeft: 110,
                }}>Medite e Relaxe</Text>
            </View>

            <Animated.FlatList
                ref={audioSlider}
                data={nature}
                renderItem={renderSongs}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {
                        contentOffset: {x: scrollX},
                    }}],
                    {useNativeDriver: true},
                )}
            />
            
            <AudioTitle>{nature[audioIndex].title}</AudioTitle>
            <Slider style={{
                marginTop: 0,
                width: 350,
                height: 65,
            }}
                value={0}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor="#EEE"
                minimunTrackTintColor="#EEE"
                maximunTrackTintColor="#FFF"
                onSlidingComplete={() => {}}
            />

            <MinutesContainer>
                <MinuteStart>0:00</MinuteStart>
                <MinuteEnd>30:00</MinuteEnd>
            </MinutesContainer>

            <AudioControlsContainer>
                <TouchableOpacity onPress={skipToPrevious}>
                    <Ionicons name="play-back-outline" size={35} color="#EEE"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="play" size={50} color="#EEE"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={skipToNext}>
                    <Ionicons name="play-forward-outline" size={35} color="#EEE"/>
                </TouchableOpacity>
            </AudioControlsContainer>
        </PageArea>
    )
}

export default player;