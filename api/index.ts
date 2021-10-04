import { Platform } from 'react-native';

export const API = Platform.OS === 'web' ? 'http://breaking-space.localhost/api' : 'http://192.168.1.6:8082';
