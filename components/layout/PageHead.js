'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

const PageHead = ({ headTitle }) => {
    const pathname = usePathname();
    const lastSegment = pathname?.split('/').filter(Boolean).pop();
    const formattedSegment = lastSegment
        ? lastSegment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
        : null;

    return (
        <>
            <Head>
                <title>
                    {formattedSegment
                        ? `${formattedSegment} - ${headTitle ? headTitle : "Metatroncube Academy - Master Digital Skills for the Future"}`
                        : headTitle
                        ? headTitle
                        : "Metatroncube Academy - Master Digital Skills for the Future"}
                </title>
            </Head>
        </>
    );
};

export default PageHead;
