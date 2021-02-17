import React, {memo, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './ProductTimer.styles';
import countdown from 'countdown';

const ProductTimer: React.FC<{endDate: Date}> = ({endDate}) => {
  const [currentTime, setCurrentTime] = useState<{
    days: number | undefined;
    hours: number | undefined;
    minutes: number | undefined;
    seconds: number | undefined;
  }>({
    days: 10,
    hours: 5,
    minutes: 12,
    seconds: 21,
  });

  useEffect(() => {
    const timer = countdown(
      new Date(endDate),
      (e) =>
        setCurrentTime({
          days: e.days,
          hours: e.hours,
          minutes: e.minutes,
          seconds: e.seconds,
        }),
      // eslint-disable-next-line no-bitwise
      countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS,
    );
    return () => clearInterval(timer as any);
  }, [endDate]);

  return (
    <View>
    <View style={styles.timeLeftContainer}>
      <View style={styles.singleTimeContainer}>
        <Text style={styles.timeText}>{currentTime.days}</Text>
        <Text style={styles.timeText}>Gün</Text>
      </View>
      <View style={styles.singleTimeContainer}>
        <Text style={styles.timeText}>{currentTime.hours}</Text>
        <Text style={styles.timeText}>Saat</Text>
      </View>
      </View><View style={styles.timeLeftContainer}>
      <View style={styles.singleTimeContainer}>
        <Text style={styles.timeText}>{currentTime.minutes}</Text>
        <Text style={styles.timeText}>Dak.</Text>
      </View>
      <View style={styles.singleTimeContainer}>
        <Text style={styles.timeText}>{currentTime.seconds}</Text>
        <Text style={styles.timeText}>San.</Text>
      </View>
    </View></View>
  );
};

export default memo(ProductTimer);
