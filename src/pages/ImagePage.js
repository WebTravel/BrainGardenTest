import React from 'react';
import { Image } from '@features/Image';

const ImagePage = ({ match: { params } }) => <Image name={params.name} />;

export default ImagePage;
