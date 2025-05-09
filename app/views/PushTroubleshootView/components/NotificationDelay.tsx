import React from 'react';
import { Linking } from 'react-native';

import NewWindowIcon from '../../../containers/NewWindowIcon';
import * as List from '../../../containers/List';

export default function NotificationDelay(): React.ReactElement {
	const openNotificationDocumentation = () => Linking.openURL('https://go.rocket.chat/i/push-notifications');

	return (
		<List.Section title='Notification_delay'>
			<List.Separator />
			<List.Item
				title='Documentation'
				onPress={openNotificationDocumentation}
				accessibilityRole='link'
				right={() => <NewWindowIcon size={32} />}
				testID='push-troubleshoot-view-notification-delay'
			/>
			<List.Separator />
			<List.Info info='Notification_delay_description' />
		</List.Section>
	);
}
