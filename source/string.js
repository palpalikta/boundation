'use strict'

function trim (input) {
	return input.trim()
}
function slugit (input) {
	return (input && input !== 'undefined' && input.replace(/[^a-zA-Z0-9.-]+/g, '')) || ''
}
function isSpecified (input) {
	return slugit(Array.isArray(input) ? input.join(' ') : input).length !== 0
}
function isNumber (input) {
	return (/^[0-9.]+$/).test(input)
}
function isGitUrl (input) {
	return (/\.git$/).test(input)
}
function repoToWebsite (input = '') {
	return input.replace(/\.git$/, '').replace(/^(ssh[:/]+)?git@github\.com[:/]*/, 'https://github.com/')
}
function repoToSlug (input = '') {
	return input.replace(/\.git$/, '').replace(/^.+?\.com[:/]*/, '')
}
function repoToOrganisation (input = '') {
	return repoToSlug(input).split('/')[0] || ''
}
function repoToProject (input = '') {
	return repoToSlug(input).split('/')[1] || ''
}

module.exports = { trim, slugit, isSpecified, isNumber, isGitUrl, repoToWebsite, repoToSlug, repoToOrganisation, repoToProject }
