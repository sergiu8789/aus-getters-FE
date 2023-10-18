'use client';
import React from 'react';
import EmployerLayout from '@/components/employer/Layout/layout';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';

export default function page() {
  return (
    <EmployerLayout>
      <PageTitleComponent
        pageTitle="Settings"
        pageSubTitle="General Settings"
        isShowJobBtn={true}
      />
    </EmployerLayout>
  );
}
