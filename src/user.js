/**
 * @class User
 * @constructor
 * @private
 * @param {Object} raw
 */
export default class User {
	constructor(raw) {
		/**
		 * @property code
		 * @type String
		 * @final
		 */
		this.code = raw.code
		/**
		 * @property roles
		 * @type String[]
		 * @final
		 */
		this.roles = raw.roles
		/**
		 * @property isStudent
		 * @type Boolean
		 * @final
		 */
		this.isStudent = raw.isStudent
		/**
		 * @property isEmployee
		 * @type Boolean
		 * @final
		 */
		this.isEmployee = raw.isEmployee
		/**
		 * @property isFamilyMember
		 * @type Boolean
		 * @final
		 */
		this.isFamilyMember = raw.isFamilyMember
		/**
		 * @property firstName
		 * @type String
		 * @final
		 */
		this.firstName = raw.firstName
		/**
		 * @property prefix
		 * @type String
		 * @final
		 */
		this.prefix = raw.prefix
		/**
		 * @property lastName
		 * @type String
		 * @final
		 */
		this.lastName = raw.lastName
		/**
		 * @property isApplicationManager
		 * @type Boolean
		 * @final
		 */
		this.isApplicationManager = raw.isApplicationManager
		/**
		 * @property isSchoolScheduler
		 * @type Boolean
		 * @final
		 */
		this.isSchoolScheduler = raw.isSchoolScheduler
		/**
		 * @property isSchoolLeader
		 * @type Boolean
		 * @final
		 */
		this.isSchoolLeader = raw.isSchoolLeader
		/**
		 * @property isStudentAdministrator
		 * @type Boolean
		 * @final
		 */
		this.isStudentAdministrator = raw.isStudentAdministrator
		/**
		 * @property isBranchLeader
		 * @type Boolean
		 * @final
		 */
		this.isBranchLeader = raw.isBranchLeader
		/**
		 * @property isTeamLeader
		 * @type Boolean
		 * @final
		 */
		this.isTeamLeader = raw.isTeamLeader
		/**
		 * @property isMentor
		 * @type Boolean
		 * @final
		 */
		this.isMentor = raw.isMentor
		/**
		 * @property isParentTeacherNightScheduler
		 * @type Boolean
		 * @final
		 */
		this.isParentTeacherNightScheduler = raw.isParentTeacherNightScheduler
		/**
		 * @property isDean
		 * @type Boolean
		 * @final
		 */
		this.isDean = raw.isDean
	}
}
