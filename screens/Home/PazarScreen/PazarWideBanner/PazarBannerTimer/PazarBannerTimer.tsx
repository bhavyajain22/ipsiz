import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './PazarBannerTimer.styles';
import SingleTimerContainer from './SingleTimerContainer/SingleTimerContainer';
import countdown from 'countdown';

const PazarBannerTimer = () => {
  const [currentTime, setCurrentTime] = useState<{
    hours: number | undefined;
    minutes: number | undefined;
    seconds: number | undefined;
  }>({
    hours: 5,
    minutes: 12,
    seconds: 21,
  });

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const timer = countdown(
      new Date(tomorrow),
      (e) =>
        setCurrentTime({
          hours: e.hours,
          minutes: e.minutes,
          seconds: e.seconds,
        }),
      // eslint-disable-next-line no-bitwise
      countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS,
    );
    return () => clearInterval(timer as any);
  }, []);

  return (
    <View style={styles.container}>
      <SingleTimerContainer
        topText={currentTime.hours as number}
        bottomText="Saat"
      />
      <SingleTimerContainer
        topText={currentTime.minutes as number}
        bottomText="Dakika"
      />
      <SingleTimerContainer
        topText={currentTime.seconds as number}
        bottomText="Saniye"
      />
    </View>
  );
};

export default memo(PazarBannerTimer);
