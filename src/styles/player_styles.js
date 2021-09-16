import styled from 'styled-components/native';

export {
    PageArea,
    AudioTitle,
    ImageContainer,
    MinutesContainer,
    MinuteStart,
    MinuteEnd,
    AudioControlsContainer
};

const PageArea = styled.SafeAreaView`
    flex: 1;
    background-color: #144280;
    align-items: center;
`;

const ImageContainer = styled.View`
    align-items: center;

    margin-top: 0px;
`;
const AudioTitle = styled.Text`
    color: #EEE;

    margin-top: 0px;
    margin-bottom: 20px;

    font-size: 23px;
    font-weight: 600;

    border: 1px solid #EEE;
    border-radius: 5px;

    padding: 10px;
`;

const MinutesContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;

    padding: 5px;

    width: 350px;
    height: 40px;
`;

const MinuteStart = styled.Text`
    color: #EEE;
    font-size: 18px;
`;

const MinuteEnd = styled.Text`
    color: #EEE;
    font-size: 18px;
`;

const AudioControlsContainer = styled.View`
    margin-top: 0px;
    margin-bottom: 60px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #EEE;
    border-radius: 8px;

    padding-left: 40px;
    padding-right: 40px;

    width: 355px;
    height: 70px;
`;