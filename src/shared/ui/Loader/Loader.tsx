import { classNames } from 'helpers/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className? :string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.ldsRipple, {}, [])}>
        <div />
        <div />
    </div>
);
