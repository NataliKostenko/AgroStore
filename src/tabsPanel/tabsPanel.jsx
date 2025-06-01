import { useState } from 'react';
import './tabsPanel.css';
import Feedback from '../feedback/feedback';
import Description from '../description/description';
import TabButton from '../tabButton/tabButton';

export default function TabsPanel() {
	const [tab, setTab] = useState('description');

	function selectTab(nextTab) {
		setTab(nextTab);
	}

	return (
		<div className='tabs'>
			<TabButton
				isActive={tab === 'description'}
				onClick={() => selectTab('description')}
			>
				Опис
			</TabButton>
			<TabButton
				isActive={tab === 'feedback'}
				onClick={() => selectTab('feedback')}
			>
				Відгуки
			</TabButton>

			<div className='tabsContent'>
				{tab === 'description' && <Description />}
				{tab === 'feedback' && <Feedback />}
			</div>
		</div>
	);
}