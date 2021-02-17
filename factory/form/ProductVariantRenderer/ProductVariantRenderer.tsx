import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './ProductVariantRenderer.styles';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import CustomCheckbox from '../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import H4Typo from '../../../components/micro-components/Typography/H4Typo/H4Typo';

// NEW
import {
  IVariantProperty,
  IOption,
  // propertyData,
} from '../../../assets/mock-data/product-detail-variant/property-data';
import {IVariantConfig} from '../../../assets/mock-data/product-detail-variant/variant-data';

const ProductVariantsRenderer: React.FC<{
  propertyData: IVariantProperty[];
  variantData: IVariantConfig[];
}> = ({propertyData, variantData}) => {
  // eslint-disable-next-line no-spaced-func
  const [variantProperties, setVariantProperties] = useState<
    (IVariantProperty & {selectedValue: string | null})[]
  >(propertyData.map((item) => ({...item, selectedValue: null})));
  const [modifiedOptions, setModifiedOptions] = useState<IOption[][]>(
    propertyData.map((item) => item.options),
  );

  useEffect(() => {
    const firstNullIndex = variantProperties.findIndex(
      (item) => item.selectedValue === null,
    );
    if (firstNullIndex > 0) {
      const obj: {[key: string]: {name: string}} = {};
      variantData.forEach((item) => {
        if (
          item.options[firstNullIndex - 1].id ===
          variantProperties[firstNullIndex - 1].selectedValue
        ) {
          obj[item.options[firstNullIndex].id] = {
            name: item.options[firstNullIndex].name,
          };
        }
      });
      const newOptions = Object.entries(obj).map(([id, valObj]) => ({
        id,
        ...valObj,
      }));
      setModifiedOptions((prev) => {
        return prev.map((options, optionsIndex) =>
          optionsIndex === firstNullIndex
            ? [...newOptions.map((item) => item)]
            : options,
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantProperties]);

  return (
    <>
      {variantProperties.map((variant, variantIndex) => {
        if (variantIndex < 1) {
          return (
            <View key={variant.id}>
              <H4Typo
                text={variant.name}
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{
                  color: COLORS.mainBlue,
                  marginTop: variantIndex > 0 ? 20 : 0,
                }}
              />
              <View style={styles.optionsContainer}>
                {modifiedOptions[variantIndex].map((option) => (
                  <CustomCheckbox
                    boxType="square"
                    key={option.id}
                    value={
                      variantProperties[variantIndex].selectedValue ===
                      option.id
                    }
                    onValueChange={(val: any) => {
                      setVariantProperties((prev) => {
                        if (val) {
                          return prev.map((item, varIndex) =>
                            varIndex === variantIndex
                              ? {...item, selectedValue: option.id}
                              : varIndex > variantIndex
                              ? {...item, selectedValue: null}
                              : item,
                          );
                        } else {
                          return prev.map((item, varIndex) =>
                            varIndex === variantIndex
                              ? {...item, selectedValue: null}
                              : varIndex > variantIndex
                              ? {...item, selectedValue: null}
                              : item,
                          );
                        }
                      });
                    }}
                    text={option.name}
                    textStyle={styles.optionText}
                    containerStyle={styles.checkboxStyle}
                  />
                ))}
              </View>
            </View>
          );
        } else {
          if (variantProperties[variantIndex - 1].selectedValue !== null) {
            return (
              <View key={variant.id}>
                <H4Typo
                  text={variant.name}
                  // eslint-disable-next-line react-native/no-inline-styles
                  textStyle={{
                    color: COLORS.mainBlue,
                    marginTop: variantIndex > 0 ? 20 : 0,
                  }}
                />
                <View
                  style={{
                    ...globalStyles.flexRow,
                    ...globalStyles.marginTopTen,
                    flexWrap: 'wrap',
                  }}>
                  {modifiedOptions[variantIndex].map((option) => (
                    <CustomCheckbox
                      boxType="square"
                      key={option.id}
                      value={
                        variantProperties[variantIndex].selectedValue ===
                        option.id
                      }
                      onValueChange={(val: any) => {
                        setVariantProperties((prev) => {
                          if (val) {
                            return prev.map((item, varIndex) =>
                              varIndex === variantIndex
                                ? {...item, selectedValue: option.id}
                                : varIndex > variantIndex
                                ? {...item, selectedValue: null}
                                : item,
                            );
                          } else {
                            return prev.map((item, varIndex) =>
                              varIndex === variantIndex
                                ? {...item, selectedValue: null}
                                : varIndex > variantIndex
                                ? {...item, selectedValue: null}
                                : item,
                            );
                          }
                        });
                      }}
                      text={option.name}
                      textStyle={styles.optionText}
                      containerStyle={styles.checkboxStyle}
                    />
                  ))}
                </View>
              </View>
            );
          }
        }
      })}
    </>
  );
};

export default ProductVariantsRenderer;
