import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
import { IExperience } from './IExperience';
import ExperienceRow from './row';

export const Experience = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IExperience.Payload }>) {
  if (payload?.disable) {
    return <></>;
  }

  // 여기는 기간 표시, Skill Keywords 같은 특이 요소가 있어서 CommonSection, CommonRow 로 못바꾸지 않을까..
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
