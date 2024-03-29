import React from 'react';
import { useTranslation } from 'react-i18next';
import { Background } from '@Components/Background/Background';
import { Button } from '@Components/Button/Button';
import { Text } from '@Components/Text/Text';
import { Icon } from '@Components/Icon/Icon';
import { useGameStateContext } from '@Hooks/useGameStateContext';

export const LandingScreen: React.FC = () => {
    const { t } = useTranslation();
    const { newGame } = useGameStateContext();

    return (
        <div className="-h-100v">
            <div
                className="-font-logo -fs-logo"
                style={
                    {
                        position: 'absolute',
                        top: 'calc(37% - 36px)',
                        left: 'calc(50% - 36px)',
                    }
                }
            >{ t('title') }
            </div>
            <div
                style={
                    {
                        position: 'absolute',
                        top: 'calc(50% - 30px)',
                        left: 'calc(50% - 30px)',
                    }
                }
            >
                <Icon icon="die" alt="So24 Logo" height="60px" width="60px" />
            </div>
            <div style={{ position: 'absolute', top: 'calc(75% - 67px)', left: 'calc(50% - 67px)' }}>
                <Button variant="normal" color="gradient" borderOnly onClick={() => newGame()}>
                    <Icon icon="plus" alt={t('newGame')} />
                    <Text color="text" size="xs" weight="regular">{ t('newGame') }</Text>
                </Button>
            </div>
            <Background />
        </div>
    );
};
