import {View, Text} from 'react-native';
import React from 'react';
import {Rect} from 'react-native-svg';
import ContentLoader from 'react-content-loader/native';

const PaymentLoader = () => {
  return (
    <View>
      <ContentLoader
        width="100%"
        height={150}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <Rect x="0" y="0" width="150" height="20" />
        <Rect x="0" y="30" width="200" height="16" />
        <Rect x="0" y="60" width="100%" height="50" />
      </ContentLoader>

      <ContentLoader
        width="100%"
        height={250}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <Rect x="0" y="0" width="150" height="20" />
        {[1, 2, 3, 4, 5].map((_, index) => (
          <React.Fragment key={index}>
            <Rect x="0" y={40 + index * 40} width="100" height="16" />
            <Rect x="250" y={40 + index * 40} width="100" height="16" />
          </React.Fragment>
        ))}
      </ContentLoader>
    </View>
  );
};

export default PaymentLoader;
