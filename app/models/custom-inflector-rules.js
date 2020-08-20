import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('дистанция', 'Дистанцияs');
inflector.irregular('дистанции', 'Дистанцииs');
inflector.irregular('участник', 'Участникs');
inflector.irregular('команда', 'Командаs');

export default {};
