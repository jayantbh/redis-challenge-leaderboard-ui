import React, { Component, Fragment as F } from 'react';
import { connect } from 'react-redux';
import cls from 'classnames';

import { HOME_FETCH_REQUEST } from './home-actions';
import { REQUEST_STATE } from 'globals/constants';
import { ReactComponent as RedisLogo } from 'assets/redis.svg';
import { ReactComponent as WreathGold } from 'assets/wreath-1.svg';
import { ReactComponent as WreathBronze } from 'assets/wreath-2.svg';
import CrownPng from 'assets/crown.png';

import css from './styles.module.scss';

type Stage = { status: string };

type Resource = {
	title: string,
	points: number,
	stages: Array<Stage>
}

type ApiResourcesFormat = { [index: number]: Resource };

type Props = {
	data: ApiResourcesFormat | null,
	status: REQUEST_STATE
	getResources: () => void
}

class Home extends Component<Props> {
	componentDidMount() {
		this.props.getResources();
	}

	render() {
		const { data } = this.props;
		let animationClass = '', maxPoints = 0, scoreBarWidth = 110;

		let resources: Array<Resource> = [];
		if (data) {
			animationClass = css['stage-1'];
			resources = Object.values(data).sort((a, b) => b.points - a.points);
			maxPoints = resources.reduce((acc, val) => Math.max(acc, val.points), 0);
		}

		return (
			<div className={cls(css.container, animationClass)}>
				<div className={css.title}>
					<div className={css.icon}><RedisLogo/></div>
					<div className={css['brand-title']}>
						<span>The</span>
						<span>R E D I S</span>
						<span>Challenge</span>
					</div>
				</div>

				<div className={css.board}>
					{ resources.length ?
						resources.map((item, i) => (
							<div key={i} className={css.row}>
								{console.log(item)}
								<div className={css.index}>
									{i === 0 ?
										<F>
											<img height={28} width={28} className={css.crown} src={CrownPng}/>
											<WreathGold className={css.wreath}/>
										</F>
									: ''}
									{i === 1 ? <WreathBronze className={css.wreath}/> : ''}
									{i + 1}
								</div>
								<div className={css.name}>{item.title}</div>
								<div className={css.stages}>
									{item.stages.map((stage, k) => (
										<div key={k} className={cls(css.status, css[stage.status])}/>
									))}
								</div>
								<div className={css.bar} style={{width: (maxPoints > 0 ? (item.points / maxPoints) * scoreBarWidth : 0) + 10}}/>
								<div className={css.points}>{item.points}</div>
							</div>
						))
					: ''}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ home: { data, status } }) => {
  return { data, status };
};

const mapDispatchToProps = dispatch => {
	return {
		getResources: () => { dispatch(HOME_FETCH_REQUEST()) }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
