import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const handleLogaoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <Text>Profile</Text>
            <Button title="Sair" onPress={handleLogaoutClick} />
        </Container>
    );
}