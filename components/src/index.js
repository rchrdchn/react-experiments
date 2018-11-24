import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeAgo={`Yesterday at 6:00AM`}
					comment={faker.lorem.text()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeAgo={`Yesterday at 5:00PM`}
					comment={faker.lorem.text()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeAgo={`Today at 12:50PM`}
					comment={faker.lorem.text()}
				/>
			</ApprovalCard>
		</div>
	)
};

ReactDOM.render(<App />, document.querySelector('#root'));