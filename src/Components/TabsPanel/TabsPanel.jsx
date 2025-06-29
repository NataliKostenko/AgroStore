import { useState } from 'react';
import './tabsPanel.css';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import TabButton from '../TabButton/TabButton';

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