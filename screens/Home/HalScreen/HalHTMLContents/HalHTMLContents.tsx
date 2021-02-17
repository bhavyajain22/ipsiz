import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {IHalHTMLContent} from '../../../../types/response-types/hal.types';
import {styles} from './HalHTMLContents.styles';
import {WebView} from 'react-native-webview';
import { FontAwesome5 } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getHalHTMLContents} from '../../../../services/hal.service';

const HalHTMLContents: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [HTMLContents, setHTMLContents] = useState<IHalHTMLContent[]>([]);

  useEffect(() => {
    getHalHTMLContents().then(({data: {data}}) => setHTMLContents(data));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.stepsContainer}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <View key={index} style={styles.singleStepContainer}>
              <TouchableOpacity
                onPress={() => setActive(index)}
                style={styles.stepButton}>
                <FontAwesome5 name="star" color="white" size={25} />
              </TouchableOpacity>
            </View>
          ))}
      </View>
      {active === 0 && <WebView source={{html: HTMLContents[0]?.content}} />}
      {active === 1 && <WebView source={{html: HTMLContents[1]?.content}} />}
      {active === 2 && <WebView source={{html: HTMLContents[2]?.content}} />}
      {active === 3 && <WebView source={{html: HTMLContents[3]?.content}} />}
    </View>
  );
};

export default memo(HalHTMLContents);
