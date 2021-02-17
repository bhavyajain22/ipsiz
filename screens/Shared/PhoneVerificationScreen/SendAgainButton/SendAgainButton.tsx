import React, {memo, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SendAgainButton.styles';

const SendAgainButton = () => {
  const [resendSeconds, setResendSeconds] = useState<number>(120);

  useEffect(() => {
    const interval = setInterval(() => {
      if (resendSeconds - 1 > 0) {
        setResendSeconds((prev) => prev - 1);
      } else {
        setResendSeconds(0);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResend = () => {
    setResendSeconds(120);
    console.log(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handleResend}>
        <Text style={styles.text}>Tekrar Gönder</Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{...styles.text, paddingLeft: 5}}>
          {resendSeconds}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(SendAgainButton);
