import styled from 'styled-components/native';

export {
    PageArea,
    GreetingsTitle,
    GreetinsBorder,
    DescriptionText,
    AudioListContainer,
    AudioItem,
    IconImage,
    IconTitle,
    BottomBar,
    BottomBarContainer,
};

// Default color for page background: (White) - #F6F6F6;

const PageArea = styled.SafeAreaView`
    flex: 1;
    background-color: #144280;
    align-items: center;
`;

const GreetingsTitle = styled.Text`
    padding: 8px;

    color: #EEE;

    margin-top: 30px;
    margin-bottom: 20px;

    font-size: 23px;
    font-weight: 700;

    text-transform: uppercase;
`;

const GreetinsBorder = styled.View`
    width: 360px;
    height: 0.5px;

    background-color: #EEE;

    margin-top: -21px;
    margin-bottom: 50px;
`;

const DescriptionText = styled.Text`
    color: #EEE;
    padding: 12px;

    font-weight: 600;
    font-size: 17px;

    border: 1px solid #EEE;
    border-radius: 5px;

    text-align: justify;

    margin-right: 3px;
    margin-left: 3px;
`;

const BottomBar = styled.View`
    background-color: #EEE;
    height: 65px;
    width: 100%;
    
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const BottomBarContainer = styled.View`

    width: 97%;
    height: 90%;

    border-radius: 15px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-right: 12px;
    padding-left: 12px;


`;

const IconImage = styled.Image`
    width: 25px;
    height: 25px;

    margin-bottom: 5px;
`;

const IconTitle = styled.Text`
    font-weight: 500;
`;

const AudioListContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 25%;

    border: 1px solid #EEE;
    border-radius: 5px;

    width: 97%;
    height: 225px;

    align-items: center;

    padding-top: 12px;
`;

const AudioItem = styled.TouchableOpacity`
    width: 380px;
    height: 50px;
    
    background-color: #EEE;

    border-radius: 4px;

    margin-bottom: 14px;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 15px;
`;