import { Button, Input } from 'antd';
import React from 'react'

function TestPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1>Shey Online Courses </h1>
      <Button type="default"> Default Button</Button>
      <Button type="primary"> Primary Button</Button>
      <Button type="dashed"> Dashed Button</Button>
      <Input placeholder="Enter something" />
    </div>
  );
}

export default TestPage