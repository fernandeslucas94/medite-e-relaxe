import React from 'react';
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import { TouchableOpacity, StatusBar,Text,ScrollView,} from 'react-native';

import { PageArea, GreetingsTitle,DescriptionText,GreetinsBorder,AudioListContainer,
    AudioItem, BottomBar, BottomBarContainer, IconImage,IconTitle,
} from '../styles/frequencias_styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Frequencias = ({navigation}) => {
    return (
        <PageArea>
            <StatusBar 
                backgroundColor="#0C2C58"
            />
            
            <GreetingsTitle>Frequências Vibracionais</GreetingsTitle>
            <GreetinsBorder></GreetinsBorder>
            
            
            <DescriptionText>
                Fique a vontade e escolha o que melhor venha a lhe atender! {'\n'} {'\n'}

                Aqui você pode encontrar frequências vibracionais que podem lhe proporcionar momentos de relaxamento, paz e equilibrio!
            </DescriptionText>


            <AudioListContainer>
                <ScrollView>
                    <AudioItem onPress={() => {
                        navigation.navigate('Frequencies Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: '15%', fontSize: 18}}>Saúde</Text>
                    </AudioItem>

                    <AudioItem onPress={() => {
                        navigation.navigate('Frequencies Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: '15%', fontSize: 18}}>Prosperidade</Text>
                    </AudioItem>

                    <AudioItem onPress={() => {
                        navigation.navigate('Frequencies Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: '15%', fontSize: 18, textAlign: 'center'}}>Limpeza Energética</Text>
                    </AudioItem>

                    <AudioItem>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: '15%', fontSize: 18, textAlign: 'center'}}>Alinhamento dos Chakras</Text>
                    </AudioItem>
                </ScrollView>
                
            </AudioListContainer>

            <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,}}
                onAdLoaded={() => {
                console.log('Advert loaded');}}
                onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);}}
            />


            <BottomBar>
                <BottomBarContainer>
                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="home-outline" size={30} />
                        <IconTitle>Home</IconTitle>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Audios')}>
                        <IconImage source={require('../../assets/images/sound.png')} />
                        <IconTitle>Audios</IconTitle>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('About Us')}>
                        <Ionicons name="menu-outline" size={30} />
                        <IconTitle>Sobre</IconTitle>
                    </TouchableOpacity>

                </BottomBarContainer>
            </BottomBar>
        </PageArea>
    )
}

export default Frequencias;