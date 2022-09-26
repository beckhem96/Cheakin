import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { HOST } from '@env';
import ReviewList from '../components/review/ReviewList';
import { useSelector } from 'react-redux';

function BookDetailScreen({ route }) {
  const { accessToken } = useSelector((state) => state.main);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [score, setScore] = useState(0);
  const [cover, setCover] = useState('');
  const [index, setIndex] = useState('');
  const [description, setDescription] = useState('');
  const bookId = route.params.bookId;
  useEffect(() => {
    Axios.get(`${HOST}/api/v1/books/${route.params.bookId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setScore(response.data.ratingScore);
        setCover(response.data.cover);
        setIndex(response.data.index);
        setDescription(response.data.description);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ScrollViewContainer>
        <BeforeContainer>
          <ButtonContainer style={{ marginLeft: 'auto', marginRight: 15 }}>
            <ButtonText>찜하기</ButtonText>
          </ButtonContainer>
        </BeforeContainer>
        <ReadingContainer>
          <ButtonContainer style={{ marginRight: 'auto', marginLeft: 15 }}>
            <ButtonText>읽기 종료</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ marginLeft: 'auto', marginRight: 15 }}>
            <ButtonText>나의 기록</ButtonText>
          </ButtonContainer>
        </ReadingContainer>
        <AfterContainer>
          <ButtonContainer>
            <ButtonText>내 기록 보기</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>독후감 작성</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>독후감 보기</ButtonText>
          </ButtonContainer>
        </AfterContainer>
        <ImageContainer source={{ uri: cover }} style={{ width: 240, height: 360 }} />
        <MiddleContainer>
          <BookTitle>{title}</BookTitle>
          <Author>{author} 지음</Author>
          <Author>평점 : {score}</Author>
          <StartTime>독서시작 : 2022.09.21 12:01</StartTime>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', fontSize: 15 }}>소개</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          </View>
          <Intro>
            <Text>{index}</Text>
          </Intro>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', fontSize: 15 }}>목차</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          </View>
          <Intro>
            <Text>{description}</Text>
          </Intro>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', fontSize: 15 }}>리뷰</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          </View>
        </MiddleContainer>
        <ReviewList bookId={bookId} />
      </ScrollViewContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

const BeforeContainer = styled.View`
  flex: 1;
`;

const ReadingContainer = styled.View`
  flex: 1;
  // background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AfterContainer = styled.View`
  flex: 1;
  // background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #b1d8e8;
  width: 25%;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  color: navy;
`;

const ButtonText = styled.Text`
  font-size: 12px;
`;

const ImageContainer = styled.Image`
  margin: 3% auto 5% auto;
`;

const MiddleContainer = styled.View`
  align-items: center;
`;

const BookTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2%;
`;

const Author = styled.Text`
  font-size: 15px;
  margin-bottom: 2%;
`;

const StartTime = styled.Text`
  font-size: 15px;
  margin-bottom: 2%;
`;

const Intro = styled.View`
  margin: 3% 10%;
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 7;
`;

export default BookDetailScreen;
