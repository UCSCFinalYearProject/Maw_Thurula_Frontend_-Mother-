import React from 'react';
import type {Node} from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  extendTheme,
  HStack,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
} from 'native-base';

const ArticleCard: () => Node = () => {
  return (
    <Box alignItems="center">
      <Box
        maxW="90%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        marginTop="50px"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'pink.100',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/06/WEB3-PREGNANT-PREGNANCY-COUPLE-HUSBAND-WIFE-FATHER-MOTHER-FAMILY-shutterstock_604197560.jpg?w=620&h=348&crop=1',
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            මව් තුරුල 
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            පළමු වරට මව්වරුන්ගේ ගැබ්ගැනීම් පිළිබඳ අත්දැකීම්
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              Dr චන්දන රණවීර
            </Text>
          </Stack>
          <Text fontWeight="400">
          ඔබේ දරුවාගේ සෞඛ්‍යය ආරක්ෂා කිරීම සඳහා යතුර වන්නේ නිතිපතා පූර්ව ප්‍රසව සත්කාර ලබා ගැනීමයි. ඔබ ගැබ්ගෙන ඇතැයි ඔබ සිතන්නේ නම්, ඔබේ පළමු පූර්ව ප්‍රසව හමුවීම උපලේඛනගත කිරීමට ඔබේ සෞඛ්‍ය සේවා සපයන්නා අමතන්න. කෙසේ වෙතත්, බොහෝ සෞඛ්‍ය සේවා සපයන්නන්, ගැටලුවක් නොමැති නම්, ගර්භනී සති 8 කට පෙර පළමු සංචාරය සැලසුම් නොකරයි.

          </Text>
          <HStack alignItems="center" space={4}  justifyContent="space-between">
            <HStack alignItems="center"  >
              <Box  flexDirection="row" minW="100%" justifyContent="space-evenly"> 
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                12 days ago
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                Read More...
              </Text>
              </Box>
              
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ArticleCard;
