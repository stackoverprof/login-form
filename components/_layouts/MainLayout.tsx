import React from 'react';
import Head from 'next/head';
import AlertHandler from '@components/_shared/AlertHandler';
import { useLayout } from '@core/contexts';
interface Props {
	children?: React.ReactNode;
	className?: string;
	title?: string;
}

const MainLayout = ({children, className, title}: Props): JSX.Element => {
	const { mainAlert, resetMainAlert } = useLayout();

	return (
		<>
			<Head>
				{title && <title>{title} — New Project</title>}
			</Head>
			{mainAlert && <AlertHandler type={mainAlert.type} message={mainAlert.message} handleClose={resetMainAlert} key={mainAlert.message}/>}
			<main style={{minHeight: 'calc(100vh - 152px)'}} className={`${className} pt-24`}>
				{children}
			</main>
		</>
	);
};

export default MainLayout;
