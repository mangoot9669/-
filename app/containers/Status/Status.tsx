// @ts-nocheck
import React from 'react';
import { StyleProp, TextStyle, useWindowDimensions } from 'react-native';

import { useTheme } from '../../theme';
import { CustomIcon, IconSet, TIconsName } from '../CustomIcon';
import { IStatusComponentProps } from './definition';
import { useUserStatusColor } from '../../lib/hooks/useUserStatusColor';

const Status = React.memo(({ style, status = 'offline', size = 32, ...props }: IStatusComponentProps) => {
	const { colors } = useTheme();
	const userStatusColor = useUserStatusColor(status);

	const { fontScale } = useWindowDimensions();

	const name: TIconsName = `status-${status}`;
	const isNameValid = IconSet.hasIcon(name);
	const iconName = isNameValid ? name : 'status-offline';
	const calculatedStyle: StyleProp<TextStyle> = [
		{
			width: size * fontScale,
			height: size * fontScale,
			textAlignVertical: 'center'
		},
		style
	];

	return (
		<CustomIcon
			{...props}
			style={calculatedStyle}
			size={size}
			name={iconName}
			color={userStatusColor ?? colors.userPresenceOffline}
		/>
	);
});

export default Status;
